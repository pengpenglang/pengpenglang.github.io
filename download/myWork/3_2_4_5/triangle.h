#ifndef TRIANGLE_H
#define TRIANGLE_H
#include "point.h"

class Triangle
{
public:
    Triangle(const Point &p1,const Point &p2,const Point &p3);
    double getArea() const;
    double getPerimeter() const;
private:
    Point p1,p2,p3;
};

#endif // TRIANGLE_H
