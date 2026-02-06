import { useParams } from "react-router"
import { useProfile } from "../../lib/hooks/useProfile";
import { Box, Button, Divider, Typography } from "@mui/material";
import { useState } from "react";
import ProfileEdit from "./ProfileEdit";

export default function ProfileAbout() {
  const {id} = useParams();
  const { profile } = useProfile(id);
  const [editMode, setEditMode] = useState(false);

  return (
    <Box>
      <Box display='flex' justifyContent='space-between'>
        <Typography variant="h5">About {profile?.displayName}</Typography>
        <Button onClick={() => setEditMode(!editMode)}>
          Edit Profile
        </Button>
      </Box>
      <Divider sx={{my: 2}}/>
      <Box>
        <Typography variant="body1" sx={{whiteSpace: 'pre-wrap'}}>
          {profile?.bio || 'No description added yet'}
        </Typography>
        {editMode && (
          <ProfileEdit setEditMode={setEditMode} />
        )}
      </Box>
    </Box>
  );
}