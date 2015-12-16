# assetgraph-builder-docker

A thin wrapper around the
[docker image](https://hub.docker.com/r/assetgraph/assetgraph-builder/)
for
[assetgraph-builder](https://github.com/assetgraph/assetgraph-builder).

It exports an executable called `buildProduction`, that is completely
compatible with the corresponding executable in assetgraph-builder. In
fact, it is the most simple wrapper imaginable which just proxies
arguments through.
