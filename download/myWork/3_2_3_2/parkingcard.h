#ifndef PARKINGCARD_H
#define PARKINGCARD_H
#include "time.h"

class ParkingCard
{
public:
    ParkingCard(double newRate);
    void setRate(double newRate);
    double getRate() const;
    void setParkingTime(const Time &time);
    void setLeavingTime(const Time &time);
    double getTotalExpenses() const;
    void output() const;
private:
    double rate;
    Time parkingTime,leavingTime;
};

#endif // PARKINGCARD_H
