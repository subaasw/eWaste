import { Injectable } from "@angular/core"
import { type Observable, of } from "rxjs"
import { delay } from "rxjs/operators"

@Injectable({
  providedIn: "root",
})
export class ApiService {
  private communities = [
    { id: 1, name: "Green Valley", address: "123 Eco St, Green City" },
    { id: 2, name: "Sustainable Heights", address: "456 Recycle Ave, Clean Town" },
  ]

  private pickups = [
    { id: 1, userId: 1, date: "2023-07-25", type: "General Waste", status: "Completed" },
    { id: 2, userId: 1, date: "2023-07-18", type: "Recycling", status: "Completed" },
    { id: 3, userId: 1, date: "2023-08-01", type: "Green Waste", status: "Scheduled" },
  ]

  private issues = [
    { id: 1, userId: 1, type: "Missed Pickup", description: "Waste not collected on scheduled date", status: "Open" },
    {
      id: 2,
      userId: 1,
      type: "Overflowing Bin",
      description: "Community bin near park is overflowing",
      status: "In Progress",
    },
  ]

  private notifications = [
    { id: 1, userId: 1, message: "Your next pickup is scheduled for tomorrow", read: false },
    { id: 2, userId: 1, message: "New community recycling initiative starting next month", read: true },
  ]

  constructor() {}

  getCommunities(): Observable<any[]> {
    return of(this.communities).pipe(delay(500))
  }

  registerCommunity(community: any): Observable<any> {
    const newCommunity = { ...community, id: this.communities.length + 1 }
    this.communities.push(newCommunity)
    return of(newCommunity).pipe(delay(500))
  }

  schedulePickup(pickup: any): Observable<any> {
    const newPickup = { ...pickup, id: this.pickups.length + 1, userId: 1, status: "Scheduled" }
    this.pickups.push(newPickup)
    return of(newPickup).pipe(delay(500))
  }

  getPickupHistory(): Observable<any[]> {
    return of(this.pickups).pipe(delay(500))
  }

  reportIssue(issue: any): Observable<any> {
    const newIssue = { ...issue, id: this.issues.length + 1, userId: 1, status: "Open" }
    this.issues.push(newIssue)
    return of(newIssue).pipe(delay(500))
  }

  getIssues(): Observable<any[]> {
    return of(this.issues).pipe(delay(500))
  }

  getNotifications(): Observable<any[]> {
    return of(this.notifications).pipe(delay(500))
  }

  markNotificationAsRead(id: number): Observable<any> {
    const notification = this.notifications.find((n) => n.id === id)
    if (notification) {
      notification.read = true
    }
    return of(notification).pipe(delay(500))
  }

  generateReport(type: string): Observable<any> {
    const report = {
      type,
      data: {
        totalPickups: this.pickups.length,
        completedPickups: this.pickups.filter((p) => p.status === "Completed").length,
        openIssues: this.issues.filter((i) => i.status === "Open").length,
        recyclingRate: "65%",
      },
    }
    return of(report).pipe(delay(1000))
  }
}

