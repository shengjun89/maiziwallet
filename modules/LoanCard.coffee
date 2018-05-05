class exports.LoanCard extends Layer
	n = Screen.width/750
	constructor: (@options={}) ->
		_.defaults @options,
			width:Screen.width-64
			backgroundColor:"#FFF"
			height: 288*n
			x:Align.center
		
		@loanCardTitle = new TextLayer
			x:32
			y:40*n
			fontSize: 32*n
			fontFamily: "PingFang TC"
			color:"#212121"
			fontWeight: 500
			lineHeight: 1
			textAlign:"left"
			text: "加载卡片名称..."
		
		@loanCardSubtitle = new TextLayer
			x:32
			fontSize:24*n
			fontFamily: "PingFang TC"
			fontWeight: 400
			color:"rgba(171,162,165,1)"
			text:"加载卡片描述..."
			textAlign:"left"

		@loanCardhan01 = new TextLayer
			x:32
			text:"额度范围(元)"
			fontSize:22*n
			fontFamily: "PingFang TC"
			fontWeight: 400
			color:"rgba(171,162,165,1)"
			textAlign:"left"

		@loanCardhan02 = new TextLayer
			text:"分期范围(期)"
			fontSize:22*n
			fontFamily: "PingFang TC"
			fontWeight: 400
			color:"rgba(171,162,165,1)"
			textAlign:"right"

		@loanCardLimit = new TextLayer
			x:32
			text:"--"
			fontSize:40*n
			fontFamily: "PingFang TC"
			fontWeight: 500
			color:"rgba(227,69,61,1)"
			textAlign:"left"

		@loanCardMon = new TextLayer
			width:200*n
			text:"--"
			fontSize:32*n
			fontFamily: "PingFang TC"
			fontWeight: 500
			color:"rgba(33,33,33,1)"
			textAlign:"right"

		@loanCardIcon = new Layer
			width:192*n
			height:192*n
			backgroundColor:null
			
		super @options
		
		@loanCardTitle.parent = @
		@loanCardTitle.y = 40*n
		@loanCardSubtitle.parent = @
		@loanCardSubtitle.y = @loanCardTitle.y+56*n
		@loanCardhan01.parent = @
		@loanCardhan01.y = 232*n
		@loanCardhan02.parent = @
		@loanCardhan02.x = Align.right(-32*n)
		@loanCardhan02.y = @loanCardhan01.y
		@loanCardLimit.parent = @
		@loanCardLimit.y = @loanCardSubtitle.y+72*n
		@loanCardMon.parent = @
		@loanCardMon.y = @loanCardSubtitle.y+72*n
		@loanCardMon.x = Align.right(-32*n)
		@loanCardIcon.parent = @
		@loanCardIcon.y = -24*n
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