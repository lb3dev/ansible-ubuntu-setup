## Setting up an Ubuntu Desktop VM with UTM

### Sharing

Install SPICE Guest tools

```bash
sudo apt install -y spice-vdagent
sudo apt install -y spice-webdavd
```

After connecting to a SPICE shared folder, change directory in terminal:
```bash
/run/user/1000/gvfs/dav+sd:host=Spice%2520client%2520folder._webdav._tcp.local
```
Where 1000 is the current logged in userid