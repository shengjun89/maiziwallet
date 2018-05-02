class exports.ProductList extends Layer
	constructor: (@options={}) ->
		_.defaults @options,
			backgroundColor:"#FFF"
			height: 380
			width:328
		
		@productPic = new Layer
			width:328
			height:244
			backgroundColor:"#F5F5F5"
			image:"images/dailybestpic01.png"
		
		@productName = new TextLayer
			width:328
			height:32
			fontSize:28
			color:"#212121"
			text:"productNameHere"
			textAlign:"left"

		@productSub = new TextLayer
			width:328
			height:24
			fontSize:24
			color:"#616161"
			text:"productsubtitlehere"
			textAlign:"left"

		@productPrice = new TextLayer
			width:328
			height:40
			fontSize:36
			color:"#E3453D"
			text:"¥0.00"
			textAlign:"left"
			
		super @options
		
		@productPic.parent = @
		@productPic.y = 0
		@productName.parent = @
		@productName.y = 252
		@productSub.parent = @
		@productSub.y = @productName.height+@productName.y+8
		@productPrice.parent = @
		@productPrice.y = @productSub.y+@productSub.height+8
		@.onTouchStart @TouchStart
		@.onTouchEnd @TouchEnd
		@.onTouchMove @TouchMove

	TouchStart: =>
		@.brightness = 90
	TouchEnd: =>
		@.brightness = 100
	TouchMove: =>
		@.brightness = 100