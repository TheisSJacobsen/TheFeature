Rectangle = function(x, y, w, h, image)
{
	if (x == null || y == null || w == null || h == null)
	{
		alert("You must pass in all the veriables for a rectange: (x, y, width, height)");
		
		var errorMsg = "The following are not provided:";
		if (x == null)
			errorMsg += " 'x' ";
		if (y == null)
			errorMsg += " 'y' ";
		if (w == null)
			errorMsg += " 'width' ";
		if (h == null)
			errorMsg += " 'height'";
		
		alert(errorMsg);
		throw new Error(errorMsg);
	}
	this.image = image;
	this.x		= x;
	this.y		= y;
	this.width	= w;
	this.height	= h;
	
	this.Intersects = function(shape)
	{
		var offset = 0;
		if (shape.radius != null)
			offset = shape.radius;
		
		if (this.Contains(shape.x - offset, shape.y - offset) || this.Contains(shape.x + shape.width - offset, shape.y - offset) ||
			this.Contains(shape.x - offset, shape.y + shape.height - offset) || this.Contains(shape.x + shape.width - offset, shape.y + shape.height - offset))
		{
			return true;
		}
		else if (shape.Contains(this.x - offset, this.y - offset) || shape.Contains(this.x + this.width - offset, this.y - offset) ||
			shape.Contains(this.x - offset, this.y + this.height - offset) || shape.Contains(this.x + this.width - offset, this.y + this.height - offset))
		{
			return true;
		}
		
		return false;
	};
	
	this.Contains = function(x, y)
	{
		if (x >= this.x && x <= this.x + this.width &&
			y >= this.y && y <= this.y + this.height)
			return true;
		else 
			return false;
	};
	
	this.Draw = function(ctx)
	{
		ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
		//ctx.fillRect(this.x, this.y, this.width, this.height);
	}
};