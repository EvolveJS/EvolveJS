export enum EVENTS {
	HELLO = 'hello', // Defines the heartbeat interval
	READY = 'clientReady', // Contains the initial state information
	RESUMED = 'resumed', // Response to the "Resume" payload sent
	RECONNECT = 'reconnect', // Server is going away, client should reconnect to gateway and resume
	INVALID_SESSION = 'invalidSession', // Failure response to Identify or Resume or invalid active session
	CHANNEL_CREATE = 'newChannel', // New channel created
	CHANNEL_UPDATE = 'channelUpdate', // Channel was updated
	CHANNEL_DELETE = 'removeChannel', // Channel was deleted
	CHANNEL_PINS_UPDATE = 'channelPinsUpdate', // Message was pinned or unpinned
	GUILD_CREATE = 'addedGuild', // Lazy-load for unavailable guild, guild became available, or user joined a new guild
	GUILD_UPDATE = 'guildUpdate', // Guild was updated
	GUILD_DELETE = 'removeGuild', // Guild became unavailable, or user left/was removed from a guild
	GUILD_BAN_ADD = 'userBanned', // User was banned from a guild
	GUILD_BAN_REMOVE = 'userUnbanned', // User was unbanned from a guild
	GUILD_EMOJIS_UPDATE = 'guildEmojisUpdate', // Guild emojis were updated
	GUILD_INTEGRATIONS_UPDATE = 'guildIntegrationsUpdate', // Guild integration was updated
	GUILD_MEMBER_ADD = 'memberJoined', // New user joined a guild
	GUILD_MEMBER_REMOVE = 'memberLeft', // User was removed from a guild
	GUILD_MEMBER_UPDATE = 'memberUpdate', // Guild member was updated
	GUILD_MEMBERS_CHUNK = 'memberChunk', // Response to Request Guild Members
	GUILD_ROLE_CREATE = 'newRole', // Guild role was created
	GUILD_ROLE_UPDATE = 'roleUpdated', // Guild role was updated
	GUILD_ROLE_DELETE = 'removeRole', // Guild role was deleted
	INVITE_CREATE = 'addInvite', // Invite to a channel was created
	INVITE_DELETE = 'removeInvite', // Invite to a channel was deleted
	MESSAGE_CREATE = 'newMessage', // Message was created
	MESSAGE_UPDATE = 'updateMessage', // Message was edited
	MESSAGE_DELETE = 'removeMessage', // Message was deleted
	MESSAGE_DELETE_BULK = 'bulkMessageRemove', // Multiple messages were deleted at once
	MESSAGE_REACTION_ADD = 'reactionAdd', // User reacted to a message
	MESSAGE_REACTION_REMOVE = 'reactionRemove', // User removed a reaction from a message
	MESSAGE_REACTION_REMOVE_All = 'reactionRemoveAll', // All reactions were explicitly removed from a message
	MESSAGE_REACTION_REMOVE_EMOJI = 'removeReactionEmoji', // All reactions for a given emoji were removed from a message
	PRESENCE_UPDATE = 'userPresenceUpdate', // User was updated
	TYPING_START = 'typing', // User started typing in a channel
	USER_UPDATE = 'userUpdate', // Properties about the user changed
	VOICE_STATE_UPDATE = 'voiceStateUpdate', // Someone joined, left, or moved a voice channel
	VOICE_SERVER_UPDATE = 'voiceServerUpdate', // Guild's voice server was updated
	WEBHOOKS_UPDATE = 'webhookUpdate' // Guild channel webhook was created, update, or deleted
}