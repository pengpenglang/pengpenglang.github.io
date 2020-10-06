#include "time.h"
#include<iomanip>
#include<iostream>
#include<cmath>
using namespace std;

Time::Time()
{
    hour=minute=0;
}

Time::Time(int h,int m):
    hour(h),minute(m){
    normalizeTime();
}

Time::Time(int minutes):
    hour(0),minute(minutes){
    normalizeTime();//use the exsited function
}

void Time::setTime(int h,int m){
    hour=h,minute=m;
    normalizeTime();
}

void Time::output() const{
    cout<<setfill('0')<<setw(2)<<hour<<":"<<setw(2)<<minute<<endl;
}

int Time::getHour() const{
    return hour;
}

int Time::getMinute() const{
    return minute;
}

int Time::getTotalMinutes() const{
    return 60*hour+minute;
}

Time Time::getTimeSpan(const Time &t) const{
    int tot1=getTotalMinutes(),tot2=t.getTotalMinutes();
    int delta=abs(tot1-tot2);
    return Time(delta);
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
