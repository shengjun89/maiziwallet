class exports.LoanCard extends Layer
	constructor: (@options={}) ->
		_.defaults @options,
			width:Screen.width-64
			backgroundColor:"#FFF"
			height: 288
			x:Align.center
		
		@loanCardTitle = new TextLayer
			x:32
			y:40
			fontSize: 32
			fontFamily: "PingFang TC"
			color:"#212121"
			fontWeight: 500
			lineHeight: 1
			textAlign:"left"
			text: "加载卡片名称..."
		
		@loanCardSubtitle = new TextLayer
			x:32
			fontSize:24
			fontFamily: "PingFang TC"
			fontWeight: 400
			color:"rgba(171,162,165,1)"
			text:"加载卡片描述..."
			textAlign:"left"

		@loanCardhan01 = new TextLayer
			x:32
			text:"额度范围(元)"
			fontSize:22
			fontFamily: "PingFang TC"
			fontWeight: 400
			color:"rgba(171,162,165,1)"
			textAlign:"left"

		@loanCardhan02 = new TextLayer
			text:"分期范围(期)"
			fontSize:22
			fontFamily: "PingFang TC"
			fontWeight: 400
			color:"rgba(171,162,165,1)"
			textAlign:"right"

		@loanCardLimit = new TextLayer
			x:32
			text:"--"
			fontSize:40
			fontFamily: "PingFang TC"
			fontWeight: 500
			color:"rgba(227,69,61,1)"
			textAlign:"left"

		@loanCardMon = new TextLayer
			width:200
			text:"--"
			fontSize:32
			fontFamily: "PingFang TC"
			fontWeight: 500
			color:"rgba(33,33,33,1)"
			textAlign:"right"

		@loanCardIcon = new Layer
			width:192
			height:192
			backgroundColor:null
			
		super @options
		
		@loanCardTitle.parent = @
		@loanCardTitle.y = 40
		@loanCardSubtitle.parent = @
		@loanCardSubtitle.y = @loanCardTitle.y+56
		@loanCardhan01.parent = @
		@loanCardhan01.y = 232
		@loanCardhan02.parent = @
		@loanCardhan02.x = Align.right(-32)
		@loanCardhan02.y = @loanCardhan01.y
		@loanCardLimit.parent = @
		@loanCardLimit.y = @loanCardSubtitle.y+72
		@loanCardMon.parent = @
		@loanCardMon.y = @loanCardSubtitle.y+72
		@loanCardMon.x = Align.right(-32)
		@loanCardIcon.parent = @
		@loanCardIcon.y = -24
		@loanCardIcon.x = Align.right

		@.onTouchStart @TouchStart
		@.onTouchEnd @TouchEnd
		@.onTouchMove @TouchMove

	TouchStart: =>
		@.brightness = 90
	TouchEnd: =>
		@.brightness = 100
	TouchMove: =>
		@.brightness = 100