class Food{
    constructor(){
        this.image=loadImage("Milk.png");
        this.FoodStock=foodStock;
    }
    getFoodStock(){
        return this.foodStock
    }
    updateFoodStock(foodStock){
        this.foodStock=foodStock
    }
    getFedTime(lastFed){
        this.lastFed=lastFed;
    }
    deductFood(){
        if(this.foodStock>0){
            this.foodStock=this.foodStock-1
        }
    }
    display(){
        var x=80,y=100;
        imageMode(CENTER);
        image(this.image,720,200,70,70);
        if(this.FoodStock!=0){
            for(var i=0;i<this.FoodStock;i++){
                if(i%10==0){
                    x=80;
                    y=y+50;
                }
                image(this.image,x,y,50,50);
                x=x+30;
            }
        }
    }
}