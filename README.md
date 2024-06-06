# TrelloToDiscordService

平常在 Trello 常常會漏掉消息, 或者是有人tag 自己
但時常會漏掉的狀況

所以就想了一個連動Discord的方式
讓我可以即時的接收到 Trello上的資訊

## 功能

- Trello 更新追蹤
- Discord 訊息輸出

## Docker
### 如果你想要使用 Docker 來運行這個專案，你可以遵循以下步驟：

1. 首先，建立一個 Docker image。在專案的根目錄下運行以下命令：

  ```bash
  docker build -t trello-to-discord-app .
  ```

  這個命令會建立一個名為 `trello-to-discord-app` 的 Docker image。

2. 然後，運行 Docker container。你可以使用以下命令來運行 container：

  ```bash
  docker run -d --name my-trello-app trello-to-discord-app
  ```

  這個命令會運行一個名為 `my-trello-app` 的 Docker container，並且在背景中運行。

### 打包成tar
1. 透過image打包成 `tar file`

  ```bash
  docker save -o trello-to-discord-app.tar trello-to-discord-app
  ```

  這個命令會建立一個名為 `trello-to-discord-app` 的 tar file by Docker image name `trello-to-discord-app`。





<!-- ## 安裝

說明如何安裝和設定你的專案。

## 使用說明

提供一些基本的使用說明。

## 貢獻

如果你想要對這個專案做出貢獻，請閱讀我們的貢獻指南。

## 授權

提供你的專案的授權資訊。

## 聯絡資訊

提供你的聯絡資訊，讓其他人可以聯絡你。 -->

