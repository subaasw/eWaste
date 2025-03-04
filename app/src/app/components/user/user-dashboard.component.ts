import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-user-dashboard",
  imports: [CommonModule],
  template: `
    <main>
      <div class="max-w-7xl mx-auto py-6 space-y-10 sm:px-6 lg:px-8">
        <div class="px-4 pt-6 sm:px-0">
          <div class="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <!-- Card for Next Pickup -->
            <div class="bg-white overflow-hidden shadow rounded-lg">
              <div class="p-5">
                <div class="flex items-center">
                  <div class="flex-shrink-0 bg-green-500 rounded-md p-3">
                    <svg
                      class="h-6 w-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div class="ml-5 w-0 flex-1">
                    <dl>
                      <dt class="text-sm font-medium text-gray-500 truncate">
                        Next Pickup
                      </dt>
                      <dd class="flex items-baseline">
                        <div class="text-2xl font-semibold text-gray-900">
                          July 28, 2023
                        </div>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
              <div class="bg-gray-50 px-5 py-3">
                <div class="text-sm">
                  <a
                    href="#"
                    class="font-medium text-green-700 hover:text-green-900"
                  >
                    View schedule
                  </a>
                </div>
              </div>
            </div>

            <!-- Card for Recycling Rate -->
            <div class="bg-white overflow-hidden shadow rounded-lg">
              <div class="p-5">
                <div class="flex items-center">
                  <div class="flex-shrink-0 bg-green-500 rounded-md p-3">
                    <svg
                      class="h-6 w-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                      />
                    </svg>
                  </div>
                  <div class="ml-5 w-0 flex-1">
                    <dl>
                      <dt class="text-sm font-medium text-gray-500 truncate">
                        Recycling Rate
                      </dt>
                      <dd class="flex items-baseline">
                        <div class="text-2xl font-semibold text-gray-900">
                          68%
                        </div>
                        <div
                          class="ml-2 flex items-baseline text-sm font-semibold text-green-600"
                        >
                          <svg
                            class="self-center flex-shrink-0 h-5 w-5 text-green-500"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            aria-hidden="true"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z"
                              clip-rule="evenodd"
                            />
                          </svg>
                          <span class="sr-only"> Increased by </span>
                          3%
                        </div>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
              <div class="bg-gray-50 px-5 py-3">
                <div class="text-sm">
                  <a
                    href="#"
                    class="font-medium text-green-700 hover:text-green-900"
                  >
                    View recycling stats
                  </a>
                </div>
              </div>
            </div>

            <!-- Card for Open Requests -->
            <div class="bg-white overflow-hidden shadow rounded-lg">
              <div class="p-5">
                <div class="flex items-center">
                  <div class="flex-shrink-0 bg-green-500 rounded-md p-3">
                    <svg
                      class="h-6 w-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                      />
                    </svg>
                  </div>
                  <div class="ml-5 w-0 flex-1">
                    <dl>
                      <dt class="text-sm font-medium text-gray-500 truncate">
                        Open Requests
                      </dt>
                      <dd class="flex items-baseline">
                        <div class="text-2xl font-semibold text-gray-900">
                          2
                        </div>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
              <div class="bg-gray-50 px-5 py-3">
                <div class="text-sm">
                  <a
                    href="#"
                    class="font-medium text-green-700 hover:text-green-900"
                  >
                    View all requests
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="bg-white rounded-lg shadow p-6">
          <h2 class="text-xl font-semibold mb-4">Monthly Statistics</h2>
          <div class="grid grid-cols-2 gap-4">
            <div>
              <p class="text-gray-600">Total Waste</p>
              <p class="text-2xl font-bold">1,250 kg</p>
            </div>
            <div>
              <p class="text-gray-600">Recycled</p>
              <p class="text-2xl font-bold">750 kg</p>
            </div>
            <div>
              <p class="text-gray-600">Pickups</p>
              <p class="text-2xl font-bold">8</p>
            </div>
            <div>
              <p class="text-gray-600">Savings</p>
              <p class="text-2xl font-bold">$45</p>
            </div>
          </div>
        </div>

        <div class="bg-white rounded-lg shadow p-6">
          <h2 class="text-xl font-semibold mb-4">Waste Composition</h2>
          <div class="relative pt-1">
            <div class="flex mb-2 items-center justify-between">
              <div>
                <span
                  class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-green-600 bg-green-200"
                >
                  Organic
                </span>
              </div>
              <div class="text-right">
                <span class="text-xs font-semibold inline-block text-green-600">
                  30%
                </span>
              </div>
            </div>
            <div
              class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-green-200"
            >
              <div
                style="width:30%"
                class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500"
              ></div>
            </div>
          </div>
          <div class="relative pt-1">
            <div class="flex mb-2 items-center justify-between">
              <div>
                <span
                  class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-200"
                >
                  Recyclable
                </span>
              </div>
              <div class="text-right">
                <span class="text-xs font-semibold inline-block text-blue-600">
                  45%
                </span>
              </div>
            </div>
            <div
              class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-200"
            >
              <div
                style="width:45%"
                class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"
              ></div>
            </div>
          </div>
          <div class="relative pt-1">
            <div class="flex mb-2 items-center justify-between">
              <div>
                <span
                  class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-red-600 bg-red-200"
                >
                  Non-recyclable
                </span>
              </div>
              <div class="text-right">
                <span class="text-xs font-semibold inline-block text-red-600">
                  25%
                </span>
              </div>
            </div>
            <div
              class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-red-200"
            >
              <div
                style="width:25%"
                class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500"
              ></div>
            </div>
          </div>
        </div>

        <div class="bg-white rounded-lg shadow p-6">
          <h2 class="text-xl font-semibold mb-4">Recent Activities</h2>
          <ul class="space-y-3">
            <li
              *ngFor="let activity of recentActivities"
              class="flex items-center"
            >
              <span
                class="w-2 h-2 rounded-full mr-2"
                [ngClass]="activity.color"
              ></span>
              <span class="flex-grow">{{ activity.description }}</span>
              <span class="text-sm text-gray-500">{{ activity.time }}</span>
            </li>
          </ul>
        </div>
      </div>
    </main>
  `,
})
export class UserDashboardComponent {
  recentActivities = [
    {
      description: "Garbage pickup completed",
      time: "2h ago",
      color: "bg-green-500",
    },
    {
      description: "Recycling bin reported full",
      time: "1d ago",
      color: "bg-yellow-500",
    },
    {
      description: "Special pickup scheduled",
      time: "2d ago",
      color: "bg-blue-500",
    },
    {
      description: "Monthly report generated",
      time: "5d ago",
      color: "bg-purple-500",
    },
  ];
}
