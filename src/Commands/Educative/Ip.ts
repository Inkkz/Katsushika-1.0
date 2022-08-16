import { BaseCommand, Command, Message } from '../../Structures'
import { IArgs } from '../../Types'
import axios from 'axios'

@Command( 'ip', {
    description: 'Gives you the info of the ip .',
    aliases: ['ip', 'locate'],
    category: 'educative',
    usage: `ip [city or state name]`,
    cooldown: 5,
    exp: 10,
    dm: false
})
export default class extends BaseCommand {
    public override execute = async (M: Message, { context }: IArgs): Promise<void> => {
        if (!context) return void M.reply('Do you want me to give the info of an unknown ip, Baka!')
        const chitoge = context.trim()
        await axios.get(`http://docs-jojo.herokuapp.com/api/ip_geolocation?ip=${chitoge}`)
        .then((response) => {
                // console.log(response);
                const text = `📌 *Ip*:  ${response.data.ip}\n *Type*: ${response.data.type}\n *Continent_code*: ${response.data.continent_code}\n *Continent_name*: ${response.data.continent_name}\n *Country_name*: ${response.data.country_name}`
                M.reply(text);
            }).catch(err => {
                M.reply(`No such ip, Baka!`)
            }
            )
    };
}
