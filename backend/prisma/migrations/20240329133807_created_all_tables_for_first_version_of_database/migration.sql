-- CreateTable
CREATE TABLE "User" (
    "userId" TEXT NOT NULL,
    "userName" TEXT NOT NULL,
    "userEmail" TEXT NOT NULL,
    "userPassword" TEXT NOT NULL,
    "userLogin" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("userId")
);

-- CreateTable
CREATE TABLE "Schedule" (
    "scheduleId" TEXT NOT NULL,
    "scheduleDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "authorId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "client" TEXT NOT NULL,

    CONSTRAINT "Schedule_pkey" PRIMARY KEY ("scheduleId")
);

-- CreateTable
CREATE TABLE "Diagnosis" (
    "diagnosisId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "description" TEXT NOT NULL,
    "client" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "userUserId" TEXT NOT NULL,

    CONSTRAINT "Diagnosis_pkey" PRIMARY KEY ("diagnosisId")
);

-- CreateTable
CREATE TABLE "Image" (
    "imageId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "storedName" TEXT NOT NULL,
    "imageName" TEXT NOT NULL,
    "sizeKb" DOUBLE PRECISION NOT NULL,
    "diagnosisId" TEXT NOT NULL,

    CONSTRAINT "Image_pkey" PRIMARY KEY ("imageId")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_userId_key" ON "User"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "User_userEmail_key" ON "User"("userEmail");

-- CreateIndex
CREATE UNIQUE INDEX "User_userLogin_key" ON "User"("userLogin");

-- CreateIndex
CREATE UNIQUE INDEX "Schedule_scheduleId_key" ON "Schedule"("scheduleId");

-- CreateIndex
CREATE UNIQUE INDEX "Diagnosis_diagnosisId_key" ON "Diagnosis"("diagnosisId");

-- CreateIndex
CREATE UNIQUE INDEX "Image_imageId_key" ON "Image"("imageId");

-- AddForeignKey
ALTER TABLE "Schedule" ADD CONSTRAINT "Schedule_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Diagnosis" ADD CONSTRAINT "Diagnosis_userUserId_fkey" FOREIGN KEY ("userUserId") REFERENCES "User"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Image" ADD CONSTRAINT "Image_diagnosisId_fkey" FOREIGN KEY ("diagnosisId") REFERENCES "Diagnosis"("diagnosisId") ON DELETE RESTRICT ON UPDATE CASCADE;
