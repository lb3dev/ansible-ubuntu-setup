## Setting up an Ubuntu Desktop VM with UTM

### Disk Snapshotting

Open UTM, select VM and right click Show in Finder, the path to VM files should be:
```bash
cd ~/Library/Containers/com.utmapp.UTM/Data/Documents/Ubuntu.utm
```

The disk in use would be the qcow2 file within:
```bash
export QCOW2_FILE=~/Library/Containers/com.utmapp.UTM/Data/Documents/Ubuntu.utm/Data/AAA.qcow2
```

Install qemu via Homebrew
```bash
brew install qemu
```

Create snapshot
```bash
qemu-img snapshot $QCOW2_FILE -c {{ snapshot name }}
```

List snapshots
```bash
qemu-img snapshot $QCOW2_FILE -l
```

Revert disk to snapshot
```bash
qemu-img snapshot $QCOW2_FILE -a {{ snapshot name }}
```

Delete snapshot
```bash
qemu-img snapshot $QCOW2_FILE -d {{ snapshot name }}
```

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