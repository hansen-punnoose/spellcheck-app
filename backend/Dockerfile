# Use the official gcc image to build the C++ executable
FROM gcc:9.3 AS cpp_builder

# Set the working directory
WORKDIR /cpp_src

# Copy C++ source files and required files
COPY backend/src ./src
COPY backend/includes ./includes
COPY backend/lib ./lib
COPY backend/english_words.txt ./

# Build the C++ executable
RUN g++ -std=c++17 -I./includes -o spellcheckexe src/*.cpp lib/*.cpp

# Use the official Node.js image as the base image
FROM node:14

# Set the working directory
WORKDIR /app

# Copy the C++ executable from the cpp_builder stage
COPY --from=cpp_builder /cpp_src/spellcheckexe /app/backend/spellcheckexe

# Copy the entire backend folder
COPY backend /app/backend

# Update the path of english_words.txt in the main.cpp file
RUN sed -i 's#./backend/english_words.txt#/app/backend/english_words.txt#g' /app/backend/src/main.cpp

# Copy package.json and package-lock.json to the working directory
COPY package.json package-lock.json ./

# Install the app dependencies
RUN npm ci

# Copy the rest of the application code
COPY . .

# Expose the port that the app will run on
EXPOSE 5002

# Start the app
CMD ["npm", "start"]
