#ifndef CIRCLE_H
#define CIRCLE_H

#include "point.h"

class Circle
{
    Point center;
    int radius;
public:
    Circle(int cx,int cy,int r);
    ~Circle();
};

#endif // CIRCLE_H
