# Planning Guide

A Land Access Assessment application that allows users to input project details, upload required documentation, and receive assessment reports with approval recommendations.

**Experience Qualities**:
1. **Professional** - Clear, structured interface that inspires confidence for regulatory/compliance work
2. **Efficient** - Streamlined two-step process from data input to report generation
3. **Accessible** - Clear labeling and intuitive file upload mechanisms for all user skill levels

**Complexity Level**: Light Application (multiple features with basic state)
  - The app manages form inputs, file uploads, state transitions between two views, and displays assessment results with conditional approval logic.

## Essential Features

### Form Input Collection
- **Functionality**: Captures Scope of Work and Construction Controls via text areas
- **Purpose**: Gather project context needed for land access assessment
- **Trigger**: User lands on application home screen
- **Progression**: User types into text areas → data saved to state → used in assessment generation
- **Success criteria**: Text persists across interactions, validates non-empty before submission

### File Upload System
- **Functionality**: Accepts three document types (HSM Search Report, Conservation Plan, Heritage Gazette)
- **Purpose**: Collect required documentation for compliance assessment
- **Trigger**: User clicks upload buttons for each file type
- **Progression**: Click upload button → file picker opens → user selects file → filename displays → file stored in state
- **Success criteria**: Files are attached, names displayed, support common formats (PDF, DOC, etc.)

### Assessment Submission
- **Functionality**: Validates inputs and transitions to results screen
- **Purpose**: Move user from data collection to assessment review phase
- **Trigger**: User clicks "Submit for Assessment" button
- **Progression**: Click submit → validate all fields filled → transition to results screen → show loading state → display assessment
- **Success criteria**: All fields validated, smooth transition, assessment data displayed

### Assessment Report Display
- **Functionality**: Shows significance assessment, approval decision (Yes/No), and detailed findings
- **Purpose**: Present the assessment outcome clearly to the user
- **Trigger**: After successful submission on first screen
- **Progression**: Assessment loads → displays report sections → user reviews → can generate formal report or ask Q&A
- **Success criteria**: Clear approval indicator, readable assessment details, action buttons functional

### Report Generation
- **Functionality**: Creates downloadable assessment report
- **Purpose**: Provide formal documentation of the assessment
- **Trigger**: User clicks "Generate Assessment Report" button
- **Progression**: Click button → report generated → download triggered
- **Success criteria**: Report contains all assessment data in readable format

## Edge Case Handling
- **Empty Form Submission**: Disable submit button or show validation errors when required fields are empty
- **Large File Uploads**: Show file size validation, limit to reasonable sizes (e.g., 10MB per file)
- **Missing Files**: Validate all three files uploaded before allowing submission
- **Back Navigation**: Allow user to return to form from results to modify inputs
- **Long Text Inputs**: Text areas should scroll, with character count indicators

## Design Direction
The design should feel professional, structured, and government/regulatory-appropriate with a clean, form-focused aesthetic. Minimal interface better serves the core purpose of efficiently collecting data and presenting clear assessment results.

## Color Selection
Custom palette with professional, trustworthy tones

- **Primary Color**: Deep blue (#2563eb) - Conveys professionalism, trust, and authority appropriate for regulatory applications
- **Secondary Colors**: Slate grays (#64748b) for supporting text and borders, maintaining visual hierarchy without distraction
- **Accent Color**: Vibrant green (#10b981) for approval indicators and success states, drawing attention to positive outcomes
- **Foreground/Background Pairings**:
  - Background (White #FFFFFF): Dark gray text (#1e293b) - Ratio 14.2:1 ✓
  - Card (Light gray #f8fafc): Dark gray text (#1e293b) - Ratio 13.8:1 ✓
  - Primary (Blue #2563eb): White text (#FFFFFF) - Ratio 4.9:1 ✓
  - Accent (Green #10b981): White text (#FFFFFF) - Ratio 3.2:1 (large text) ✓
  - Muted (Light slate #f1f5f9): Medium gray text (#64748b) - Ratio 4.6:1 ✓

## Font Selection
Clean, professional sans-serif typefaces that prioritize readability for form labels, inputs, and assessment text.

- **Typographic Hierarchy**:
  - H1 (Page Title): Inter Bold/32px/tight letter spacing
  - H2 (Section Headers): Inter SemiBold/20px/normal spacing
  - Body (Labels & Text): Inter Regular/16px/relaxed line height (1.6)
  - Input Text: Inter Regular/16px/normal spacing
  - Button Text: Inter Medium/16px/normal spacing

## Animations
Subtle, purposeful transitions that guide the user between form and results states without adding unnecessary delay.

- **Purposeful Meaning**: Smooth screen transitions convey progress and maintain context. File upload feedback confirms action completion. Hover states on buttons provide clear interactivity cues.
- **Hierarchy of Movement**: Primary focus on the screen transition animation (form → results). Secondary focus on button hover states and file upload confirmations.

## Component Selection

- **Components**:
  - **Card**: Contains entire form and results screen with subtle elevation
  - **Textarea**: For Scope of Work and Construction Controls inputs
  - **Button**: Primary (Submit, Generate Report, Q&A), Secondary/Outline (Upload files)
  - **Label**: Clear field labeling for all inputs
  - **Input**: For file uploads (styled with custom upload UI)
  - **Badge**: For Yes/No approval indicator with conditional colors
  - **Separator**: Divides sections cleanly

- **Customizations**:
  - Custom file upload component that shows filename after selection
  - Two-panel layout component to switch between form and results views
  - Assessment details display with formatted text sections

- **States**:
  - Buttons: Default, Hover (slight scale), Active (pressed), Disabled (grayed when form incomplete)
  - Inputs: Default, Focus (blue ring), Filled (shows content), Error (red border)
  - File uploads: Empty (upload prompt), Filled (filename shown), Hover (highlight)

- **Icon Selection**:
  - Upload icon for file upload buttons
  - CheckCircle for approval indicator
  - XCircle for rejection indicator
  - FileText for report generation
  - Question for Q&A button

- **Spacing**:
  - Container padding: 8 (32px)
  - Section gaps: 6 (24px)
  - Form field gaps: 4 (16px)
  - Button spacing: 3 (12px)

- **Mobile**:
  - Stack form fields vertically with full width
  - Reduce padding on container to 4 (16px)
  - Single column layout for all breakpoints
  - Touch-friendly button sizes (min 44px height)
  - File upload buttons span full width on mobile
