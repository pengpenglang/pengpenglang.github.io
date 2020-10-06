#ifndef TIME_H
#define TIME_H

class Time
{
public:
    Time();
    Time(int h,int m);
    void setTime(int h,int m);
    void output();
    int getHour();
    int getMinute();
    int getTotalMinutes();
private:
    int hour,minute;
    void normalizeTime();
};

#endif // TIME_H
