/* eslint-disable no-mixed-spaces-and-tabs */
import {
	User,
	TextChannel,
	Message,
	GuildMember,
	Guild,
	Emoji,
	IMessageReaction,
	EvolveClient,
} from "../../mod.ts";

export class MessageReaction {
  public user?: User;
  public channel!: TextChannel;
  public message!: Message;
  public member?: GuildMember;
  public guild!: Guild;
  public emoji?: Emoji;

  constructor(public data: IMessageReaction, private client: EvolveClient) {
  	this._handle();
  }

  private _handle() {
  	if (!this.data) return;
  	Message.handle(this.data.message, this.client).then((o: Message) => {
  		this.message = o;
  	});
  	this.channel = new TextChannel(this.data.channel, this.client);
  	this.emoji = new Emoji(this.data.emoji);
  	this.user = new User(this.data.user);
  	this.member = new GuildMember(this.data.member);
  	this.guild = new Guild(this.data.guild, this.client);
  	return this;
  }
}
