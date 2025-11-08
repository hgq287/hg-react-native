# hg-react-native

`hg-react-native` is a scalable and production-ready React Native starter kit designed to help you bootstrap mobile apps in just 30 minutes.

This starter template comes with powerful default modules and a clean project structure, making it perfect for launching new projects or maintaining long-term codebases.

## Features

- React Native Template – A pre-configured setup ready out-of-the-box.
- Scalable Project Architecture – Designed with long-term maintainability in mind.
- Fast Setup – Get a professional-grade project structure in under 30 minutes.

## Modular Codebase – Built-in base modules like

- API layer (with environment-based switching)
- Database layer using Realm
- State management with Redux (ready to scale with middleware and slices)

### Environment Separation – Automatic environment configs using .env files

- Custom CLI Scripts – Simplify environment switching, builds, and automation tasks.

- Organized Folder Structure – Clean separation of concerns for features, UI, and business logic.

#### Project Structure

```
hg-react-native/
├── src/
│   ├── components/
│   ├── constants/
│   ├── core/
│   ├── features/
│   ├── i18n/
│   ├── hooks/
│   └── launch/
│   ├── navigator/
│   ├── redux/
│   └── translations/
│   ├── types/
│   └── utils/
│   ├── config.ts
├── vendors/
├── .env.example
└── ...
```

## Getting Started

#### Clone the repo

```
git clone https://github.com/hgq287/hg-react-native.git
cd hg-react-native
```

#### Install dependencies

```
npm install
```

#### Set up environment

```
cp .env.example .env
```

then, modify .env as needed (API base URL, environment keys, etc.)

#### Run the app

```
npm run ios      # for iOS
npm run android  # for Android
```

#### Run unit-tests

```bash
npx jest
```

## What’s Inside

- React Native (latest version)
- React Navigation
- Realm Database
- Axios for API requests
- Custom environment loader
- TypeScript ready (if applicable)

## Use Cases

- Kickstart new React Native apps with clean architecture
- MVP projects for startups
- Maintainable long-term codebases
- Internal tools and mobile dashboards

## License

MIT License – use it freely and feel free to credit if you find it helpful 🙌
