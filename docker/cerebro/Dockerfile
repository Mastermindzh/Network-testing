FROM openjdk:8-jre

ENV CEREBRO_VERSION 0.7.3
RUN mkdir -p /opt/cerebro
RUN cd /opt/cerebro \
    && wget -O cerebro-${CEREBRO_VERSION}.tgz https://github.com/lmenezes/cerebro/releases/download/v${CEREBRO_VERSION}/cerebro-${CEREBRO_VERSION}.tgz \
    && tar --strip-components=1 -zxf cerebro-${CEREBRO_VERSION}.tgz -C . \
    && rm cerebro-${CEREBRO_VERSION}.tgz \
    && mkdir logs

WORKDIR /opt/cerebro
EXPOSE 9000
CMD ["./bin/cerebro"]
