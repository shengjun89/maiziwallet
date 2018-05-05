class exports.ProductList extends Layer
	n = Screen.width/750
	constructor: (@options={}) ->
		_.defaults @options,
			backgroundColor:"#FFF"
			height: 380*n
			width:328*n
		
		@productPic = new Layer
			width:328*n
			height:244*n
			backgroundColor:"#F5F5F5"
			image:"images/dailybestpic01.png"
		
		@productName = new TextLayer
			width:328*n
			height:32*n
			fontSize:28*n
			color:"#212121"
			text:"productNameHere"
			textAlign:"left"

		@productSub = new TextLayer
			width:328*n
			height:24*n
			fontSize:24*n
			color:"#616161"
			text:"productsubtitlehere"
			textAlign:"left"

		@productPrice = new TextLayer
			width:328*n
			height:40*n
			fontSize:36*n
			color:"#E3453D"
			text:"¥0.00"
			textAlign:"left"
			
		super @options
		
		@productPic.parent = @
		@productPic.y = 0
		@productName.parent = @
		@productName.y = 252*n
		@productSub.parent = @
		@productSub.y = @productName.height+@productName.y+8*n
		@productPrice.parent = @
		@productPrice.y = @productSub.y+@productSub.height+8*n
		@.onTouchStart @TouchStart
		@.onTouchEnd @TouchEnd
		@.onTouchMove @TouchMove

	TouchStart: =>
		@.brightness = 90
	TouchEnd: =>
		@.brightness = 100
	TouchMove: =>
		@.brightness = 100