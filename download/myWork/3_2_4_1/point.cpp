#include "point.h"

Point::Point(double newX, double newY):
    x(newX),y(newY){}

Point::Point(const Point &p):
    x(p.getX()),y(p.getY()){}

void Point::setValue(double newX, double newY){
    x=newX,y=newY;
}

double Point::getX() const{
    return x;
}

double Point::getY() const{
    return y;
}


