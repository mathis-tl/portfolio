import { defineCollection } from "astro:content";
import { file, glob } from "astro/loaders";
import { z } from "astro/zod";
import { parse as parseToml } from "toml";
import { pixelIconNames } from "./lib/pixel-icons";

/**
 * Loader and schema for the configuration collection.
 * It loads a TOML file from the `content/configuration.toml` path and defines the schema for the configuration data.
 */
const configuration = defineCollection({
  loader: file("content/configuration.toml", {
    parser: (text) => JSON.parse(JSON.stringify(parseToml(text))),
  }),
  schema: z.object({
    /**
     * Core site configuration.
     */
    site: z.object({
      /**
       * This should be the base URL of your live site,
       * and is used to generate absolute URLs for links and metadata.
       */
      baseUrl: z.url(),
    }),

    /**
     * The global metadata for the site. If specific page metadata is not provided,
     * this metadata will be used as a fallback for SEO and Open Graph tags.
     */
    globalMeta: z.object({
      /**
       * The title of the page, used in the HTML `<title>` tag and Open Graph metadata.
       */
      title: z.string(),

      /**
       * The short description of the page, used in Open Graph metadata and as a fallback for SEO.
       */
      description: z.string(),

      /**
       * The long description of the page, used in Open Graph metadata and as a fallback for SEO.
       */
      longDescription: z.string().optional(),

      /**
       * The URL of the card image for social media sharing.
       */
      cardImage: z.url().optional(),

      /**
       * Keywords for SEO, used in the `<meta name="keywords">` tag.
       */
      keywords: z.array(z.string()).optional(),
    }),

    notFoundMeta: z.object({
      /**
       * The title of the page, used in the HTML `<title>` tag and Open Graph metadata.
       */
      title: z.string(),

      /**
       * The short description of the page, used in Open Graph metadata and as a fallback for SEO.
       */
      description: z.string(),

      /**
       * The long description of the page, used in Open Graph metadata and as a fallback for SEO.
       */
      longDescription: z.string().optional(),

      /**
       * The URL of the card image for social media sharing.
       */
      cardImage: z.url().optional(),

      /**
       * Keywords for SEO, used in the `<meta name="keywords">` tag.
       */
      keywords: z.array(z.string()).optional(),
    }),

    /**
     * The project page's metadata.
     */
    projectMeta: z.object({
      /**
       * The title of the page, used in the HTML `<title>` tag and Open Graph metadata.
       */
      title: z.string(),

      /**
       * The short description of the page, used in Open Graph metadata and as a fallback for SEO.
       */
      description: z.string(),

      /**
       * The long description of the page, used in Open Graph metadata and as a fallback for SEO.
       */
      longDescription: z.string().optional(),

      /**
       * The URL of the card image for social media sharing.
       */
      cardImage: z.url().optional(),

      /**
       * Keywords for SEO, used in the `<meta name="keywords">` tag.
       */
      keywords: z.array(z.string()).optional(),
    }),

    /**
     * The hero section configuration.
     */
    hero: z.object({
      /**
       * The title displayed in the hero section.
       */
      title: z.string(),

      /**
       * The subtitle displayed in the hero section.
       */
      subtitle: z.string(),

      /**
       * The text displayed in the call-to-action button in the hero section.
       */
      ctaText: z.string(),

      /**
       * The URL of the call-to-action button in the hero section.
       */
      ctaUrl: z.string().default("/projects"),
    }),

    /**
     * The about section of the homepage.
     */
    about: z.object({
      title: z.string(),
      paragraphs: z.array(z.string()),
      interestsLabel: z.string(),
      interests: z.array(
        z.object({ label: z.string(), icon: z.enum(pixelIconNames) }),
      ),
    }),

    /**
     * The skills section of the homepage, grouped by theme.
     */
    skills: z.object({
      title: z.string(),
      groups: z.array(
        z.object({
          label: z.string(),
          icon: z.enum(pixelIconNames),
          items: z.array(z.string()),
        }),
      ),
    }),

    /**
     * The personal information of the site owner or author.
     */
    personal: z.object({
      /**
       * The name of the site owner or author, used in various places throughout the site.
       */
      name: z.string(),

      /**
       * The GitHub profile URL of the site owner or author.
       */
      githubProfile: z.url().optional(),

      /**
       * Adresse e-mail publique, utilisée pour un lien mailto.
       */
      email: z.email().optional(),

      /**
       * The Twitter profile URL of the site owner or author.
       */
      twitterProfile: z.url().optional(),

      /**
       * The LinkedIn profile URL of the site owner or author.
       */
      linkedinProfile: z.url().optional(),

      /**
       * Chemin local du CV PDF, servi depuis public/.
       */
      cvUrl: z.string().startsWith("/").optional(),
    }),

    /**
     * Commonly used text used throughout the site.
     */
    texts: z.object({
      /**
       * The text used when displaying the projects section on the homepage.
       */
      projectsName: z.string(),

      /**
       * The text used for the "View All" button in the projects section.
       */
      viewAll: z.string(),

      /**
       * The text displayed when there are no projects found.
       */
      noProjects: z.string(),
    }),

    /**
     * The menu configuration for the site.
     * This defines the URLs for the main navigation links.
     */
    menu: z.object({
      home: z.string().default("/"),
      projects: z.string().default("/projects"),
      /** Add other menu items here **/
    }),
  }),
});

/**
 * Loader and schema for the project collection.
 * It loads markdown files from the `content/projects` directory and defines the schema for each project.
 */
const project = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./content/projects" }),
  schema: z
    .object({
      /**
       * The title of the project.
       */
      title: z.string(),

      /**
       * The slug for the project, used in the URL.
       */
      slug: z.string().optional(),

      /**
       * The short description of the project, used in Open Graph metadata and as a fallback for SEO.
       */
      description: z.string(),

      /**
       * The long description of the project, used in Open Graph metadata and as a fallback for SEO.
       */
      longDescription: z.string().optional(),

      /**
       * The URL of the card image for social media sharing.
       */
      cardImage: z.url().optional(),

      /**
       * The tags associated with the project, used for categorization and filtering.
       */
      tags: z.array(z.string()).optional(),

      /**
       * The github repository URL for the project.
       */
      githubUrl: z.url().optional(),

      /**
       * The live demo URL for the project, if applicable.
       */
      liveDemoUrl: z.url().optional(),

      /**
       * Optional date. Projects are ordered by `order`, not by this field.
       */
      timestamp: z
        .date()
        .transform((val) => new Date(val))
        .optional(),

      /**
       * Display order on the projects page and the homepage, ascending.
       */
      order: z.number(),

      /**
       * Pixel icon displayed next to the project title.
       */
      icon: z.enum(pixelIconNames).optional(),

      /**
       * Whether the project is featured on the homepage.
       */
      featured: z.boolean().default(false),
    })
    .transform((data) => {
      const slug =
        data.slug ??
        data.title
          .toLowerCase()
          .replace(/\s+/g, "-")
          .replace(/[^\w-]/g, "");
      const newData = {
        ...data,
        slug,
      };
      return newData;
    }),
});

export const collections = { project, configuration };
