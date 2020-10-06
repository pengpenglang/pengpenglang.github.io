#ifndef COMPLEX_H
#define COMPLEX_H

class Complex
{
public:
    Complex();
    Complex(double n);
    Complex(double n,double d);
    void setValue(double n,double d);
    double getReal()const;
    double getImage()const;
    double getDistance()const;
    void output()const;
    Complex add(const Complex &c)const;
    Complex multiply(const Complex &c)const;
private:
    double real,image;
};

#endif // COMPLEX_H
