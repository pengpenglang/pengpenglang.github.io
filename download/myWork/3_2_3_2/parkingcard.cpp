#include<iostream>
#include "parkingcard.h"
#include "time.h"

using namespace std;

ParkingCard::ParkingCard(double newRate){
    rate=newRate;
}

void ParkingCard::setRate(double newRate){
    rate=newRate;
}

double ParkingCard::getRate() const{//didn't use? I can visit rate directly!
    return rate;
}

void ParkingCard::setParkingTime(const Time &time){
    parkingTime=time;
}

void ParkingCard::setLeavingTime(const Time &time){
    leavingTime=time;
}

double ParkingCard::getTotalExpenses() const{
    Time tot=leavingTime.getTimeSpan(parkingTime);
    double value=1.0*tot.getHour()*rate;
    if(tot.getMinute()<=30)value+=0.5*rate;//see as half an hour
    else value+=1.0*rate;//see as an hour
    return value;
}

void ParkingCard::output() const{
    cout<<"Total Expenses: "<<getTotalExpenses()<<endl;
    cout<<"  Parking Time: ";parkingTime.output();
    cout<<"  Leaving Time: ";leavingTime.output();
    cout<<"  Rate: "<<rate<<endl;
}






