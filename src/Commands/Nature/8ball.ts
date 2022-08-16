import { BaseCommand, Command, Message } from '../../Structures'

@Command('8ball', {
    description: 'Sends a random 8ball image',
    category: 'nature',
    usage: '8ball',
    exp: 20,
    cooldown: 5
})
export default class extends BaseCommand {
    public override execute = async ({ reply }: Message): Promise<void> => {
        const { url } = await this.client.utils.fetch<{ url: string }>('https://nekos.life/api/v2/img/8ball')
        return void (await reply(await this.client.utils.getBuffer(url), 'image'))
    }
}
