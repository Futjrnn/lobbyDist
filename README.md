# lobby D I S T

### Run IPFS Locally
See https://ipfs.io/docs/getting-started/

but basically, install then

```
> tar xvfz go-ipfs.tar.gz
> cd go-ipfs
> ./install.sh
```

then

```
> ipfs init
> ipfs daemon
```

finally

```
> ipfs pin ls --type recursive | cut -d’ ' -f1 | xargs -n1 ipfs pin rm
> ipfs repo gc
```

Navigate to http://localhost:5001/webui
