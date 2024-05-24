---
slug: ubuntu-install-ssh
title: Setting Up SSH Server on Ubuntu
authors: Zephyr
tags: [ubuntu, ssh]
image: /en/img/2023/0912.webp
description: Tutorial on configuring ssh server.
---

<figure>
![title](/img/2023/0912.webp)
<figcaption>Cover image: Automatically generated by GPT-4 after reading this article.</figcaption>
</figure>

---

SSH (Secure Shell) is a network protocol that allows users to securely access and manage remote servers.

This guide will walk you through setting up passwordless login.

## 1. Install OpenSSH Server

Open a terminal.

Enter the following commands to install the OpenSSH server:

```bash
sudo apt update
sudo apt install openssh-server
```

## 2. Check SSH Server Status

Use the following command to check the status of the SSH server:

```bash
sudo systemctl status ssh
```

If you see "Active: active (running)", then the SSH server has been successfully started.

## 3. Configure SSH Passwordless Login:

### 3.1 Generate SSH Key Pair on the Client

Open a terminal.

Enter the following command to generate a key pair:

```bash
ssh-keygen
```

Follow the prompts. The default settings are usually sufficient. You can press Enter when prompted for a passphrase to create a passphrase-less key pair.

### 3.2 Copy the Public Key to the Server

Use the `ssh-copy-id` command to copy the public key to the server. Replace `[username]` and `[server-ip]` with your server details.

```bash
ssh-copy-id [username]@[server-ip]
```

For example:

```bash
ssh-copy-id john@192.168.0.100
```

If the server is using a non-default SSH port (e.g., 2222), use the `-p` parameter:

```bash
ssh-copy-id -p 2222 john@192.168.0.100
```

This command will prompt you for the server's password.

Once the authentication is successful, your public key will be added to the `~/.ssh/authorized_keys` file on the server.

### 3.3 Test Passwordless Login

Try SSHing into the server:

```bash
ssh [username]@[server-ip]
```

If everything is configured correctly, you should be able to log in to the server without a password.

## Notes

Using SSH key authentication indeed enhances security and convenience, but make sure not to lose your private key.

It's recommended to regularly rotate or update your SSH keys. For added security, consider disabling password authentication.

This can be configured in `/etc/ssh/sshd_config` on the server:

- `PasswordAuthentication no`.

Once you've completed the above steps, you'll be able to log in to the server from the client without a password using SSH key authentication.