#ifndef TIME_H
#define TIME_H

class Time
{
public:
    Time();
    Time(int h,int m);
    Time(int minutes);//new
    void setTime(int h,int m);
    void output() const;
    int getHour() const;
    int getMinute() const;
    int getTotalMinutes() const;
    Time getTimeSpan(const Time &t) const;//new cal the time delta
private:
    int hour,minute;
    void normalizeTime();
};

#endif // TIME_H
