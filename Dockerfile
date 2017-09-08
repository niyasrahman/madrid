FROM node:8.4.0

MAINTAINER Quintype Developers <dev-core@quintype.com>

EXPOSE 3000

RUN apt-get update \
	&& apt-get install -y wget htop git \
	&& useradd -ms /bin/bash app \
  && npm install -g yarn

ADD . /app
RUN chown -R app:app /app

USER app
WORKDIR /app

RUN git log -n1 --pretty="Commit Date: %aD%nBuild Date: `date --rfc-2822`%n%h %an%n%s%n" > public/round-table.txt && \
    yarn
RUN yarn add node-sass

ENV NODE_ENV production
RUN yarn run compile

ENTRYPOINT ["npm"]
CMD ["start"]
