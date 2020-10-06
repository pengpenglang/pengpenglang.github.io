#include"complex.h"
#include<bits/stdc++.h>
using namespace std;

Complex::Complex(){
    real=image=0;
}

Complex::Complex(double n):
    real(n),image(0){}

Complex::Complex(double n,double d):
    real(n),image(d){}

void Complex::setValue(double n, double d){
    real=n,image=d;
}

double Complex::getReal(){
    return real;
}

double Complex::getImage(){
    return image;
}

double Complex::getDistance(){
    return sqrt(real*real+image*image);
}

void Complex::output(){
    cout<<real;
    if(image==0){
        cout<<endl;
        return ;
    }
    else{
        if(image>0)cout<<'+'<<image<<'i'<<endl;
        else cout<<image<<'i'<<endl;
    }
}
