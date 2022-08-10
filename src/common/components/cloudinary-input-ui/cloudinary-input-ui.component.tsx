import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Skeleton,
  Typography,
} from '@mui/material';
import { FC, useRef } from 'react';
import { Button } from 'react-admin';

interface CloudinaryInputUIProps {
  placeholder: string;
}

export const CloudinaryInputUI: FC<CloudinaryInputUIProps> = ({
  placeholder,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const onUploadClick = () => {
    inputRef.current?.click();
  };

  return (
    <div>
      <input
        type="file"
        accept="image/*"
        style={{ display: 'none' }}
        ref={inputRef}
      />
      <Card variant="outlined">
        <CardHeader title={placeholder} />
        <CardContent>
          <Skeleton variant="rectangular" width={384} height={247} />
        </CardContent>
        <CardActions>
          <Button variant="contained" onClick={onUploadClick}>
            <Typography>Завантажити</Typography>
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};
