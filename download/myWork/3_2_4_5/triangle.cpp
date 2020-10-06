#include "point.h"
#include "triangle.h"
#include<cmath>

Triangle::Triangle(const Point &p1,const Point &p2,const Point &p3){
    this->p1=p1,this->p2=p2,this->p3=p3;
}

double Triangle::getArea() const{
    double len1,len2,len3;
    len1=p1.getDistance(p2),len2=p1.getDistance(p3),len3=p2.getDistance(p3);
    double half=(len1+len2+len3)/2;
    return sqrt(half*(half-len1)*(half-len2)*(half-len3));
}

double Triangle::getPerimeter() const{
    double len1,len2,len3;
    len1=p1.getDistance(p2),len2=p1.getDistance(p3),len3=p2.getDistance(p3);
    return len1+len2+len3;
}
