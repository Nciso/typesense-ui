# Typesense Server User Interface

A web-based user interface for Typesense server that provides a simple way to manage and visualize your Typesense data.

## Features

- Browse collections and documents
- View collection schemas
- Real-time search functionality
- Dark mode interface
- Configurable connection settings
- Docker-ready deployment

## Prerequisites

- Docker and Docker Compose (for Docker deployment)
- Node.js 16+ (for local development)
- A running Typesense server instance

## Setup

### Using Docker Compose (Recommended)

1. Clone this repository:
```bash
git clone https://github.com/yourusername/typesense-ui.git
cd typesense-ui
```

2. Copy `.env.example` to `.env` and configure your Typesense connection parameters:
```bash
cp .env.example .env
```

3. Run with docker-compose:
```bash
docker-compose up
```

Example docker-compose.yml:
```yaml
version: '3'
services:
  typesense-ui:
    build: .
    ports:
      - "3000:3000"
    environment:
      - TS_SERVER_KEY=${TS_SERVER_KEY:-your_key_here}
      - TS_HOST=${TS_HOST:-localhost}
      - TS_PORT=${TS_PORT:-8108}
      - TS_PROTOCOL=${TS_PROTOCOL:-http}
      - PAGE_LENGTH=${PAGE_LENGTH:-20}
      - USE_DEMO=${USE_DEMO:-true}
    volumes:
      - ./js:/app/js
      - ./css:/app/css
```

### Using Docker Directly

1. Build the image:
```bash
docker build -t typesense-ui .
```

2. Run the container:
```bash
docker run -p 3000:3000 \
  -e TS_SERVER_KEY=your_key_here \
  -e TS_HOST=localhost \
  -e TS_PORT=8108 \
  -e TS_PROTOCOL=http \
  -e PAGE_LENGTH=20 \
  -e USE_DEMO=false \
  typesense-ui
```

### Local Development Setup

1. Install dependencies:
```bash
npm install
```

2. Configure environment variables in `.env`

3. Start the development server:
```bash
npm start
```

## Configuration

### Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `TS_SERVER_KEY` | Your Typesense API key | `your_key_here` |
| `TS_HOST` | Typesense server hostname | `localhost` |
| `TS_PORT` | Typesense server port | `8108` |
| `TS_PROTOCOL` | Protocol to use (http/https) | `http` |
| `PAGE_LENGTH` | Number of items per page | `20` |
| `USE_DEMO` | Whether to use demo mode | `true` |

### Example .env file
```env
TS_SERVER_KEY=xyz123
TS_HOST=typesense.example.com
TS_PORT=8108
TS_PROTOCOL=https
PAGE_LENGTH=20
USE_DEMO=false
```

## Development

The project uses a simple Express server to serve the UI and handle environment variable injection. For development:

- The Docker setup includes volume mounts for the `js` and `css` directories
- Changes to these directories will be reflected immediately without rebuilding
- The application will be available at http://localhost:3000

### Project Structure

```
.
├── Dockerfile
├── docker-compose.yml
├── package.json
├── server.js
├── .env
├── .gitignore
├── css/
│   └── style-dark.css
└── js/
    ├── typesense-api.js
    ├── vdom.js
    ├── components.js
    └── main.js
```

## Troubleshooting

### Common Issues

1. Connection refused:
   - Verify Typesense server is running
   - Check if the host/port configuration is correct
   - Ensure firewall rules allow the connection

2. Authentication failed:
   - Verify your API key is correct
   - Check if the API key has appropriate permissions

3. CORS issues:
   - Ensure your Typesense server is configured to accept requests from the UI's domain

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Built with [Typesense](https://typesense.org/)
- Uses Express for serving the UI
- Docker support for easy deployment
- Inspired by [bfritscher/typesense-dashboard](https://github.com/bfritscher/typesense-dashboard) - A comprehensive Typesense Dashboard built with Vue and Electron