# GitHub Repository Setup Instructions

## Step 1: Add Remote Repository
Replace `YOUR_USERNAME` and `YOUR_REPO_NAME` with your GitHub username and repository name:

```bash
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
```

## Step 2: Verify Remote Repository
Check that the remote repository was added correctly:

```bash
git remote -v
```

## Step 3: Push Your Code to GitHub
Push your existing code to GitHub:

```bash
git push -u origin main
```

If you're prompted for credentials, you'll need to enter your GitHub username and password or personal access token.

## Note on Authentication
GitHub no longer accepts password authentication for Git operations. You might need to:

1. Use a personal access token: 
   - Go to GitHub → Settings → Developer settings → Personal access tokens
   - Generate a new token with appropriate permissions
   - Use this token as your password when prompted

2. Or set up SSH authentication:
   ```bash
   # Generate SSH key if you don't have one
   ssh-keygen -t ed25519 -C "your_email@example.com"
   
   # Add your SSH key to the ssh-agent
   eval "$(ssh-agent -s)"
   ssh-add ~/.ssh/id_ed25519
   
   # Copy your public key and add it to GitHub
   cat ~/.ssh/id_ed25519.pub
   # Copy the output and add it to GitHub → Settings → SSH and GPG keys
   
   # Then update your remote URL to use SSH
   git remote set-url origin git@github.com:YOUR_USERNAME/YOUR_REPO_NAME.git
   ```

## Step 4: Verify Push Was Successful
Go to your GitHub repository page to confirm your code was pushed successfully.