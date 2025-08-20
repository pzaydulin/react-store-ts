import { useDocumentTitle } from "@app/shared/hooks/useDocumentTitle";
import React from "react";
import PaymentOutlinedIcon from "@mui/icons-material/PaymentOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import Card from "@app/shared/components/Card";
import { useAuth } from "@app/core/contexts/AuthContext";
import { capitalizeFirstLetter } from "@app/shared/utils/capitalizeFirstLetter";

const AccountPage: React.FC = () => {
  useDocumentTitle("Account Information");
  const { user } = useAuth();
  if (!user) {
    return <div className="text-accent">User not found</div>;
  }

  const fullName = `${capitalizeFirstLetter(
    user.name.firstname
  )} ${capitalizeFirstLetter(user.name.lastname)}`;
  const email = user.email || "No email provided";
  const address = user.address
    ? `${user.address.number} ${capitalizeFirstLetter(
        user.address.street
      )}, ${capitalizeFirstLetter(user.address.city)}, ${user.address.zipcode}`
    : "No address provided";

  return (
    <Card title="Account Information" className="mx-auto bg-secondary/30 p-8">
      <div className="py-4 md:py-8">
        <div className="mb-4 grid gap-4 sm:grid-cols-2 sm:gap-8 lg:gap-16">
          <div className="space-y-4">
            <div className="flex space-x-4">
              <AccountCircleOutlinedIcon className="!h-16 !w-16 text-secondary" />
              <div>
                <span className="mb-2 inline-block rounded bg-secondary px-2.5 py-0.5 text-xs font-medium">
                  PRO Account
                </span>
                <h2 className="flex items-center text-xl font-bold leading-none  sm:text-2xl">
                  {fullName}
                </h2>
              </div>
            </div>
            <dl className="">
              <dt className="font-semibold">Email Address</dt>
              <dd className="text-muted_foreground">{email}</dd>
            </dl>
            <dl>
              <dt className="font-semibold ">Home Address</dt>
              <dd className="flex items-center gap-1 text-muted_foreground">
                <svg
                  className="hidden h-5 w-5 shrink-0 text-muted_foreground lg:inline"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m4 12 8-8 8 8M6 10.5V19a1 1 0 0 0 1 1h3v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h3a1 1 0 0 0 1-1v-8.5"
                  />
                </svg>
                {address}
              </dd>
            </dl>
            <dl>
              <dt className="font-semibold">Delivery Address</dt>
              <dd className="flex items-center gap-1 text-muted_foreground">
                <svg
                  className="hidden h-5 w-5 shrink-0 text-muted_foreground lg:inline"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 7h6l2 4m-8-4v8m0-8V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v9h2m8 0H9m4 0h2m4 0h2v-4m0 0h-5m3.5 5.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm-10 0a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"
                  />
                </svg>
                {address}
              </dd>
            </dl>
          </div>
          <div className="space-y-4">
            <dl>
              <dt className="font-semibold ">Phone Number</dt>
              <dd className="text-muted_foreground">
                {user.phone || "No phone number provided"}
              </dd>
            </dl>
            <dl>
              <dt className="font-semibold ">Favorite pick-up point</dt>
              <dd className="flex items-center gap-1 text-muted_foreground">
                <svg
                  className="hidden h-5 w-5 shrink-0 text-muted_foreground  lg:inline"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 12c.263 0 .524-.06.767-.175a2 2 0 0 0 .65-.491c.186-.21.333-.46.433-.734.1-.274.15-.568.15-.864a2.4 2.4 0 0 0 .586 1.591c.375.422.884.659 1.414.659.53 0 1.04-.237 1.414-.659A2.4 2.4 0 0 0 12 9.736a2.4 2.4 0 0 0 .586 1.591c.375.422.884.659 1.414.659.53 0 1.04-.237 1.414-.659A2.4 2.4 0 0 0 16 9.736c0 .295.052.588.152.861s.248.521.434.73a2 2 0 0 0 .649.488 1.809 1.809 0 0 0 1.53 0 2.03 2.03 0 0 0 .65-.488c.185-.209.332-.457.433-.73.1-.273.152-.566.152-.861 0-.974-1.108-3.85-1.618-5.121A.983.983 0 0 0 17.466 4H6.456a.986.986 0 0 0-.93.645C5.045 5.962 4 8.905 4 9.736c.023.59.241 1.148.611 1.567.37.418.865.667 1.389.697Zm0 0c.328 0 .651-.091.94-.266A2.1 2.1 0 0 0 7.66 11h.681a2.1 2.1 0 0 0 .718.734c.29.175.613.266.942.266.328 0 .651-.091.94-.266.29-.174.537-.427.719-.734h.681a2.1 2.1 0 0 0 .719.734c.289.175.612.266.94.266.329 0 .652-.091.942-.266.29-.174.536-.427.718-.734h.681c.183.307.43.56.719.734.29.174.613.266.941.266a1.819 1.819 0 0 0 1.06-.351M6 12a1.766 1.766 0 0 1-1.163-.476M5 12v7a1 1 0 0 0 1 1h2v-5h3v5h7a1 1 0 0 0 1-1v-7m-5 3v2h2v-2h-2Z"
                  />
                </svg>
                {address}
              </dd>
            </dl>

            <dl>
              <dt className="mb-1 font-semibold ">Payment Methods</dt>
              <dd className="flex items-start space-x-2 text-muted_foreground">
                <PaymentOutlinedIcon />
                <div>
                  <div className="text-sm">
                    <p className="mb-0.5 font-medium ">Visa ending in 7658</p>
                    <p className="font-normal text-xs text-muted_foreground">
                      Expiry 10/2025
                    </p>
                  </div>
                </div>
              </dd>
            </dl>
          </div>
        </div>
        <div className="flex gap-3">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-lg text-secondary_foreground bg-secondary px-5 py-2.5 text-sm font-medium hover:bg-primary/90 active:bg-primary "
          >
            <svg
              className="-ms-0.5 me-1.5 h-4 w-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m14.304 4.844 2.852 2.852M7 7H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4.5m2.409-9.91a2.017 2.017 0 0 1 0 2.853l-6.844 6.844L8 14l.713-3.565 6.844-6.844a2.015 2.015 0 0 1 2.852 0Z"
              ></path>
            </svg>
            Edit your data
          </button>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-lg text-secondary_foreground bg-secondary px-5 py-2.5 text-sm font-medium hover:bg-primary/90 active:bg-primary "
          >
            <svg
              className="-ms-0.5 me-1.5 h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="currentColor"
            >
              <path d="M80-200v-80h800v80H80Zm46-242-52-30 34-60H40v-60h68l-34-58 52-30 34 58 34-58 52 30-34 58h68v60h-68l34 60-52 30-34-60-34 60Zm320 0-52-30 34-60h-68v-60h68l-34-58 52-30 34 58 34-58 52 30-34 58h68v60h-68l34 60-52 30-34-60-34 60Zm320 0-52-30 34-60h-68v-60h68l-34-58 52-30 34 58 34-58 52 30-34 58h68v60h-68l34 60-52 30-34-60-34 60Z" />
            </svg>
            Change password
          </button>
        </div>
      </div>

      <div className="rounded-lg bg-secondary/50 p-4 md:p-8">
        <h3 className="mb-4 text-xl font-semibold">Latest orders</h3>
        <div className="flex flex-wrap items-center gap-y-4 border-b border-border pb-4 ">
          <dl className="w-1/2 sm:w-48">
            <dt className="text-base font-medium  text-primary">Order ID:</dt>
            <dd className="mt-1.5 text-base font-semibold ">
              <a href="#" className="hover:underline">
                #FSO12546798
              </a>
            </dd>
          </dl>

          <dl className="w-1/2 sm:w-1/4 md:flex-1 lg:w-auto">
            <dt className="text-base font-medium text-primary">Date:</dt>
            <dd className="mt-1.5 text-base font-semibold">11.12.2024</dd>
          </dl>

          <dl className="w-1/2 sm:w-1/5 md:flex-1 lg:w-auto">
            <dt className="text-base font-medium text-primary">Price:</dt>
            <dd className="mt-1.5 text-base font-semibold">$499</dd>
          </dl>

          <dl className="w-1/2 sm:w-1/4 sm:flex-1 lg:w-auto">
            <dt className="text-base font-medium text-primary">Status:</dt>
            <dd className="whitespace-nowrap me-2 mt-1.5 inline-flex shrink-0 items-center rounded px-2.5 py-0.5 text-xs font-medium  bg-yellow-900 text-yellow-300">
              <svg
                className="me-1 h-3 w-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 7h6l2 4m-8-4v8m0-8V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v9h2m8 0H9m4 0h2m4 0h2v-4m0 0h-5m3.5 5.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm-10 0a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"
                ></path>
              </svg>
              In transit
            </dd>
          </dl>
        </div>
        <div className="flex flex-wrap items-center gap-y-4 border-b border-border pb-4  pt-4">
          <dl className="w-1/2 sm:w-48">
            <dt className="text-base font-medium text-primary">Order ID:</dt>
            <dd className="mt-1.5 text-base font-semibold">
              <a href="#" className="hover:underline">
                #FSO12546777
              </a>
            </dd>
          </dl>

          <dl className="w-1/2 sm:w-1/4 md:flex-1 lg:w-auto">
            <dt className="text-base font-medium text-primary">Date:</dt>
            <dd className="mt-1.5 text-base font-semibold">10.11.2025</dd>
          </dl>

          <dl className="w-1/2 sm:w-1/5 md:flex-1 lg:w-auto">
            <dt className="text-base font-medium text-primary">Price:</dt>
            <dd className="mt-1.5 text-base font-semibold">$3,287</dd>
          </dl>

          <dl className="w-1/2 sm:w-1/4 sm:flex-1 lg:w-auto">
            <dt className="text-base font-medium text-primary">Status:</dt>
            <dd className="mt-1.5 inline-flex items-center rounded bg-red-100 px-2.5 py-0.5 text-xs font-medium text-red-800 dark:bg-red-900 dark:text-red-300">
              <svg
                className="me-1 h-3 w-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18 17.94 6M18 18 6.06 6"
                ></path>
              </svg>
              Cancelled
            </dd>
          </dl>
        </div>
        <div className="flex flex-wrap items-center gap-y-4 border-b border-border pb-4  pt-4">
          <dl className="w-1/2 sm:w-48">
            <dt className="text-base font-medium text-primary">Order ID:</dt>
            <dd className="mt-1.5 text-base font-semibold">
              <a href="#" className="hover:underline">
                #FSO12546846
              </a>
            </dd>
          </dl>

          <dl className="w-1/2 sm:w-1/4 md:flex-1 lg:w-auto">
            <dt className="text-base font-medium text-primary">Date:</dt>
            <dd className="mt-1.5 text-base font-semibold">07.11.2025</dd>
          </dl>

          <dl className="w-1/2 sm:w-1/5 md:flex-1 lg:w-auto">
            <dt className="text-base font-medium text-primary">Price:</dt>
            <dd className="mt-1.5 text-base font-semibold">$111</dd>
          </dl>

          <dl className="w-1/2 sm:w-1/4 sm:flex-1 lg:w-auto">
            <dt className="text-base font-medium text-primary">Status:</dt>
            <dd className="mt-1.5 inline-flex items-center rounded bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-300">
              <svg
                className="me-1 h-3 w-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 11.917 9.724 16.5 19 7.5"
                ></path>
              </svg>
              Completed
            </dd>
          </dl>
        </div>
        <div className="flex flex-wrap items-center gap-y-4 pt-4 md:pt-5">
          <dl className="w-1/2 sm:w-48">
            <dt className="text-base font-medium text-primary">Order ID:</dt>
            <dd className="mt-1.5 text-base font-semibold">
              <a href="#" className="hover:underline">
                #FSO12546212
              </a>
            </dd>
          </dl>

          <dl className="w-1/2 sm:w-1/4 md:flex-1 lg:w-auto">
            <dt className="text-base font-medium text-primary">Date:</dt>
            <dd className="mt-1.5 text-base font-semibold">18.10.2025</dd>
          </dl>

          <dl className="w-1/2 sm:w-1/5 md:flex-1 lg:w-auto">
            <dt className="text-base font-medium text-primary">Price:</dt>
            <dd className="mt-1.5 text-base font-semibold">$756</dd>
          </dl>

          <dl className="w-1/2 sm:w-1/4 sm:flex-1 lg:w-auto">
            <dt className="text-base font-medium text-primary">Status:</dt>
            <dd className="mt-1.5 inline-flex items-center rounded bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-300">
              <svg
                className="me-1 h-3 w-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 11.917 9.724 16.5 19 7.5"
                ></path>
              </svg>
              Completed
            </dd>
          </dl>
        </div>
      </div>
    </Card>
  );
};

export default AccountPage;
