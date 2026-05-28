-- CreateTable
CREATE TABLE "NewsletterLead" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "interest" TEXT,
    "consent" BOOLEAN NOT NULL DEFAULT false,
    "source" TEXT NOT NULL DEFAULT 'unknown',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "NewsletterLead_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "NewsletterLead_email_key" ON "NewsletterLead"("email");
