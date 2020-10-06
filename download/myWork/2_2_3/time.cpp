#include "time.h"
#include<iomanip>
#include<iostream>
using namespace std;

Time::Time()
{
    hour=minute=0;
}

Time::Time(int h,int m):
    hour(h),minute(m){
    normalizeTime();
}

void Time::setTime(int h,int m){
    hour=h,minute=m;
    normalizeTime();
}

void Time::output(){
    cout<<setfill('0')<<setw(2)<<hour<<":"<<setw(2)<<minute<<endl;
}

int Time::getHour(){
    return hour;
}

int Time::getMinute(){
    return minute;
}

int Time::getTotalMinutes(){
    return 60*hour+minute;
}

void Time::normalizeTime(){
    int temp=0;//count the extra hour from minute

    if(minute>=60){
        temp+=minute/60;
        minute%=60;
    }

    hour+=temp;
    if(hour>=24)hour%=24;
}
