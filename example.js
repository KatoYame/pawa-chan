                    case 'sgawrgura':
                    try {
                        if(isLimit(data.sender)) return data.reply(mess.limit)                        
                        data.reply(mess.wait) //https://api.lolhuman.xyz/api/sticker/sgawrgura?apikey=beta
                        Client.sendStickerFromUrl(from, `${configs.lolUrl}/api/sticker/sgawrgura?apikey=${configs.LolKey}`, message, { pack: `${configs.pack}`, author: `${configs.author}` })
                    } catch {
                        data.reply(mess.error)
                    }
                    break