#ifndef COMPLEX_H
#define COMPLEX_H

class Complex{
public:
    Complex();// both 0
    Complex(double n);//n 0
    Complex(double n,double d);//n d
    void setValue(double n,double d);
    double getReal();
    double getImage();
    double getDistance();
    void output();
private:
    double real;
    double image;
};

#endif // COMPLEX_H
