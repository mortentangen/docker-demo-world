# Docker

## bygge
`docker build -t world-image .`

## starte
* Sørg for at nettverket `hello-world-network` eksisterer
  - `docker network create hello-world-network`
* `docker run -dit --net=hello-world-network --name world-container world-image`