import { BasicLayout } from "@/components/layout";
import { Box, Button, TextField, Typography, Card } from "@mui/material";
import ImageCrop from "./_components/image-crop";

export default function ResearchNew() {
  return (
    <BasicLayout>
      <Card
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          width: '100%',
          maxWidth: '600px',
          gap: 4,
          p: 4,
        }}
        elevation={3}
      >
        <Typography
          variant="h3"
        >
          研究を作成
        </Typography>
        <Box
          component="form"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 4,
            width: '100%',
          }}
        >
          <TextField
            label="研究名"
            variant="outlined"
            fullWidth
          />
          <TextField
            label="説明"
            variant="outlined"
            fullWidth
          />
          <TextField
            label="システムURL"
            variant="outlined"
            fullWidth
          />
          <TextField
            label="スライドURL"
            variant="outlined"
            fullWidth
          />
          <ImageCrop />

          <label htmlFor="upload-button">
            <input
              id="upload-button"
              type="file"
              accept="image/*"
              hidden
            />
            <Button
              variant="outlined"
              color="primary"
              component="span"
              >
              画像をアップロード
            </Button>
          </label>
          
          <Button
            variant="contained"
            color="primary"
          >
            作成
          </Button>
        </Box>
      </Card>
    </BasicLayout>
  )
}
