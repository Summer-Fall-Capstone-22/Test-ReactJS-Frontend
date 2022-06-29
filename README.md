# CS469/470 documentation repo
## Getting started (2 options):

1. Run the following command on your local environment (w/o Docker):

```
$ git clone https://github.com/ActIII03/Capstone-docs
$ cd Capstone-docs
$ npm install
```

Then, you can run locally in development mode with live reload:

```
$ npm run dev
```

Open http://localhost:3000 with your favorite browser to see your project.

2. Run the following command if using Docker & docker-compose:

```
$ docker-compose up
```


Open http://localhost:3000 with your favorite browser to see your project.

## Layout & Customization

```
.
├── _posts            # Our posts live here
├── public            # Static files
│   ├── assets
│   │   └── images
│   │       └── posts # Images used in your posts
└── src
    ├── pages         # Next.js pages
    ├── styles        # CSS styles
    └── templates     # Post templates
```

You can easily configure Next js Boilerplate. Please change the following file:

- `public/apple-touch-icon.png`, `public/favicon.ico`, `public/favicon-16x16.png` and `public/favicon-32x32.png`: your blog favicon, you can generate from https://favicon.io/favicon-converter/
- `public/assets/images/logo.png`, `public/assets/images/logo-32x32.png`: your blog logo
- `src/styles/main.css`: your blog CSS file using Tailwind CSS
- `src/utils/Config.ts`: configuration file like blog name, url, etc.
- `src/templates/Main.tsx`: blog theme

## Deploy to production

You can see the results locally in production mode with:

```
$ npm run build
$ npm run start
```

The generated HTML and CSS files are minified (built-in feature from Next js). It will also removed unused CSS from [Tailwind CSS](https://tailwindcss.com).

You can create an optimized production build with:

```
$ npm run build-prod
```

Now, your blog is ready to be deployed. All generated files are located at `dist` folder, which you can deploy with any hosting service.
