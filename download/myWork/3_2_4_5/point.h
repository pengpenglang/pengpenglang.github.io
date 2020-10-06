#ifndef POINT_H
#define POINT_H

class Point
{
public:
    Point(double newX=0,double newY=0);
    Point(const Point &p);
    ~Point();
    void setValue(double newX,double newY);
    double getX() const;
    double getY() const;
    double getDistance(const Point &p2) const;
private:
    double x,y;
};

#endif // POINT_H
