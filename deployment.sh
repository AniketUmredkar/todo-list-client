sudo yum update -y
sudo yum install -y nodejs npm
sudo yum install git
sudo npm install -g pm2
sudo npm install -g serve

directory="todo-list-client"
repository_url="https://github.com/AniketUmredkar/todo-list-client.git"

# Check if the directory exists
if [ ! -d "$directory" ]; then
  # Directory doesn't exist, perform git clone
  sudo git clone "$repository_url"
  echo "Repository cloned successfully."
else
  # Directory exists, provide a message
  echo "Directory '$directory' already exists. Skipping git clone."
fi

cd $directory

sudo git checkout master
sudo git pull

sudo npm install
sudo npm run build

pm2 stop all
pm2 delete all

NODE_ENV=production pm2 serve build 3000 --spa