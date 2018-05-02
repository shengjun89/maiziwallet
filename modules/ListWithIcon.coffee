class exports.ListWithIcon extends Layer
	constructor: (@options={}) ->
		_.defaults @options,
			backgroundColor:"#FFF"
			height: 96
			width:Screen.width
		
		@list_name = new TextLayer
			width:328
			height:96
			lineHeight:3.4
			fontSize: 28
			fontFamily: "PingFang SC"
			fontWeight: 400
			letterSpacing: 0.0
			textAlign: "left"
			color: "rgba(32,32,32,1)"
			
		
		@list_icon = new Layer
			width:40
			height:40
			backgroundColor:null
			image:""

		@list_arrow = new Layer
			width:9.5
			height:19
			backgroundColor:null
			image:"images/account/arrow.svg"
			
		super @options
		
		@list_name.parent = @
		@list_name.y = Align.center
		@list_name.x = 120
		@list_icon.parent = @
		@list_icon.y = 28
		@list_icon.x = 44
		@list_arrow.parent = @
		@list_arrow.y = Align.center
		@list_arrow.x = Align.right(-48)
		@.onTouchStart @TouchStart
		@.onTouchEnd @TouchEnd
		@.onTouchMove @TouchMove

	TouchStart: =>
		@.brightness = 90
	TouchEnd: =>
		@.brightness = 100
	TouchMove: =>
		@.brightness = 100