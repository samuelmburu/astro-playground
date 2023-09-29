# Detect the platform (similar to $OSTYPE)
echo "Checking OS to see if extra packages need to be installed..."

OS="`uname`"
case $OS in
  'Linux')
    OS='Linux'
    alias ls='ls --color=auto'
    echo "On $OS: installing '@esbuild/linux-x64@latest'"
    npm install @esbuild/linux-x64@latest
    echo "Install complete!"
    ;;
  'FreeBSD')
    OS='FreeBSD'
    alias ls='ls -G'
    echo "On $OS: installing '@esbuild/linux-x64@latest'"
    npm install @esbuild/linux-x64@latest
    echo "Install complete!"
    ;;
  'WindowsNT')
    OS='Windows'
    echo "No install required!"
    ;;
  'Darwin') 
    OS='Mac'
    echo "No install required!"
    ;;
  'SunOS')
    OS='Solaris'
    echo "No install required!"
    ;;
  'AIX')
    echo "No install required!"
    ;;
  *) ;;
esac

