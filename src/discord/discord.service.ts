import { Injectable, HttpService } from '@nestjs/common';

@Injectable()
export class DiscordService {
    private Discord = require('discord.js');
    private client = new this.Discord.Client();
    private messageEmbed = new this.Discord.MessageEmbed();

    private prefix = process.env.DISCORD_PREFIX;

    constructor(private httpService: HttpService) { }

    public start() {
        this.ready();
        this.client.on('message', msg => {
            if (msg.content.startsWith(this.prefix + `ping`)) {
                this.pong(msg);
            }

            if (msg.content.startsWith(this.prefix + `create`)) {
                this.createCharacter(msg);
            }

            if (msg.content.startsWith(this.prefix + `get`)) {
                this.getCharacter(msg);
            }
        });

        this.login();
    }

    private pong(msg: any): any {
        return msg.reply('Pong!');
    }

    private ready() {
        this.client.on('ready', () => {
            console.log(`Logged in as ${this.client.user.tag}!`);
        });
    }

    private login() {
        this.client.login(process.env.DISCORD_TOKEN);
    }

    private getCharacter(msg: any): any {
        this.httpService.get(`http://localhost:3000/character/${msg.author.id}`).subscribe((character) => {
            console.log(character.data);
            const characterInfo = {

            }
            this.messageEmbed.setColor('#0099ff')
                .setTitle(character.data.name)
                .setDescription('Some description here')
                .setThumbnail('https://i.imgur.com/wSTFkRM.png')
                .addFields(
                    { name: 'Inline field title', value: 'Some value here', inline: true },
                    { name: 'Inline field title', value: 'Some value here', inline: true },
                )
                .addField('Inline field title', 'Some value here', true)
                .setImage('https://i.imgur.com/wSTFkRM.png')
                .setTimestamp()
                .setFooter('Some footer text here', 'https://i.imgur.com/wSTFkRM.png');
            return this.client.channels.cache.get(msg.channel.id).send(this.messageEmbed);
        });
    }

    private createCharacter(msg: any): any {
        const character = {
            name: msg.author.username,
            discordid: msg.author.id
        }
        this.httpService.post('http://localhost:3000/character/create', character).subscribe(
            (character: any) => {
                return msg.reply(character);
            },
            (error: any) => {
                return this.client.channels.cache.get(msg.channel.id).send(`You've already created a character!`);
            }
        );
    }
}
